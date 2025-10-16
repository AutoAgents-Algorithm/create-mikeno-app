#!/usr/bin/env node

import { program } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import ora from 'ora';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEMPLATES = {
  desktop: {
    name: 'Desktop App (Electron + Next.js + Python)',
    description: 'Full-featured desktop application with Electron, Next.js frontend, and FastAPI backend'
  },
  web: {
    name: 'Web App (Next.js + Python)',
    description: 'Modern web application with Next.js frontend and FastAPI backend'
  }
};

// ASCII Art Logo
const logo = `
╔╦╗╦╦╔═╔═╗╔╗╔╔═╗
║║║║╠╩╗║╣ ║║║║ ║
╩ ╩╩╩ ╩╚═╝╝╚╝╚═╝
`;

async function main() {
  console.log(chalk.cyan(logo));
  console.log(chalk.cyan.bold('Create Mikeno App\n'));

  program
    .name('create-mikeno-app')
    .description('Create a new Mikeno application')
    .argument('[project-name]', 'Name of your project')
    .option('-t, --template <template>', 'Template to use (desktop or web)')
    .option('--skip-install', 'Skip installing dependencies')
    .version('1.0.1')
    .action(async (projectName, options) => {
      try {
        // Get project name
        if (!projectName) {
          const answers = await inquirer.prompt([
            {
              type: 'input',
              name: 'projectName',
              message: 'What is your project name?',
              default: 'my-mikeno-app',
              validate: (input) => {
                if (/^[a-z0-9-_]+$/.test(input)) return true;
                return 'Project name may only include lowercase letters, numbers, hyphens and underscores';
              }
            }
          ]);
          projectName = answers.projectName;
        }

        // Get template choice
        let template = options.template;
        if (!template || !TEMPLATES[template]) {
          const answers = await inquirer.prompt([
            {
              type: 'list',
              name: 'template',
              message: 'Which template would you like to use?',
              choices: [
                {
                  name: `${chalk.cyan('Desktop')} - ${TEMPLATES.desktop.description}`,
                  value: 'desktop'
                },
                {
                  name: `${chalk.green('Web')} - ${TEMPLATES.web.description}`,
                  value: 'web'
                }
              ]
            }
          ]);
          template = answers.template;
        }

        const projectPath = path.resolve(process.cwd(), projectName);

        // Check if directory already exists
        if (await fs.pathExists(projectPath)) {
          console.log(chalk.red(`\n✗ Directory ${projectName} already exists!`));
          process.exit(1);
        }

        console.log(chalk.cyan(`\n📦 Creating ${TEMPLATES[template].name}...`));
        console.log(chalk.gray(`   Location: ${projectPath}\n`));

        // Copy template
        await copyTemplate(template, projectPath, projectName);

        // Install dependencies
        if (!options.skipInstall) {
          await installDependencies(projectPath, template);
        }

        // Success message
        printSuccessMessage(projectName, template, options.skipInstall);

      } catch (error) {
        console.error(chalk.red('\n✗ Error creating project:'), error.message);
        process.exit(1);
      }
    });

  program.parse();
}

async function copyTemplate(template, projectPath, projectName) {
  const spinner = ora('Copying template files...').start();

  try {
    const templatePath = path.join(__dirname, '..', 'templates', template);
    
    // Check if template exists
    if (!await fs.pathExists(templatePath)) {
      throw new Error(`Template "${template}" not found`);
    }

    // Copy template
    await fs.copy(templatePath, projectPath);

    // Update package.json with project name
    const packageJsonPath = path.join(projectPath, 'web', 'frontend', 'package.json');
    if (await fs.pathExists(packageJsonPath)) {
      const packageJson = await fs.readJson(packageJsonPath);
      packageJson.name = projectName;
      await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });
    }

    // Update electron package.json if desktop template
    if (template === 'desktop') {
      const electronPackageJsonPath = path.join(projectPath, 'electron', 'package.json');
      if (await fs.pathExists(electronPackageJsonPath)) {
        const packageJson = await fs.readJson(electronPackageJsonPath);
        packageJson.name = `${projectName}-electron`;
        await fs.writeJson(electronPackageJsonPath, packageJson, { spaces: 2 });
      }
    }

    spinner.succeed('Template files copied');
  } catch (error) {
    spinner.fail('Failed to copy template');
    throw error;
  }
}

async function installDependencies(projectPath, template) {
  console.log(chalk.cyan('\n📦 Installing dependencies...\n'));

  // Detect package manager
  const packageManager = await detectPackageManager();
  console.log(chalk.gray(`   Using ${packageManager}\n`));

  try {
    // Install web backend dependencies (Python)
    await installPythonDeps(path.join(projectPath, 'web', 'backend'));

    // Install web frontend dependencies (Node.js)
    await installNodeDeps(path.join(projectPath, 'web', 'frontend'), packageManager);

    // Install electron dependencies if desktop template
    if (template === 'desktop') {
      await installNodeDeps(path.join(projectPath, 'electron'), packageManager);
    }

    console.log(chalk.green('\n✓ All dependencies installed!\n'));
  } catch (error) {
    console.log(chalk.yellow('\n⚠ Some dependencies failed to install'));
    console.log(chalk.gray('  You can install them manually later\n'));
  }
}

async function installPythonDeps(backendPath) {
  const spinner = ora('Installing Python dependencies...').start();
  
  return new Promise((resolve) => {
    const pip = spawn('pip', ['install', '-r', 'requirements.txt'], {
      cwd: backendPath,
      stdio: 'pipe'
    });

    pip.on('close', (code) => {
      if (code === 0) {
        spinner.succeed('Python dependencies installed');
      } else {
        spinner.warn('Python dependencies installation skipped');
      }
      resolve();
    });

    pip.on('error', () => {
      spinner.warn('Python dependencies installation skipped');
      resolve();
    });
  });
}

async function installNodeDeps(dir, packageManager) {
  const spinner = ora(`Installing Node.js dependencies in ${path.basename(dir)}...`).start();

  return new Promise((resolve) => {
    const installCmd = packageManager === 'npm' ? 'install' : packageManager === 'yarn' ? '' : 'install';
    const args = installCmd ? [installCmd] : [];

    const proc = spawn(packageManager, args, {
      cwd: dir,
      stdio: 'pipe'
    });

    proc.on('close', (code) => {
      if (code === 0) {
        spinner.succeed(`Node.js dependencies installed in ${path.basename(dir)}`);
      } else {
        spinner.warn(`Node.js dependencies installation failed in ${path.basename(dir)}`);
      }
      resolve();
    });

    proc.on('error', () => {
      spinner.warn(`Node.js dependencies installation failed in ${path.basename(dir)}`);
      resolve();
    });
  });
}

async function detectPackageManager() {
  try {
    await fs.access(path.join(process.cwd(), 'pnpm-lock.yaml'));
    return 'pnpm';
  } catch {}

  try {
    await fs.access(path.join(process.cwd(), 'yarn.lock'));
    return 'yarn';
  } catch {}

  return 'npm';
}

function printSuccessMessage(projectName, template, skipInstall) {
  console.log(chalk.green.bold('✓ Success!'), chalk.gray(`Created ${projectName}\n`));

  console.log('📁 Project structure:');
  console.log(chalk.gray('   ' + projectName + '/'));
  if (template === 'desktop') {
    console.log(chalk.gray('   ├── electron/      # Electron desktop app'));
  }
  console.log(chalk.gray('   ├── web/'));
  console.log(chalk.gray('   │   ├── frontend/  # Next.js frontend'));
  console.log(chalk.gray('   │   └── backend/   # FastAPI backend'));
  console.log(chalk.gray('   ├── docker/        # Docker configuration'));
  console.log(chalk.gray('   └── README.md\n'));

  console.log('🚀 Quick start:\n');
  console.log(chalk.cyan(`   cd ${projectName}`));

  if (skipInstall) {
    console.log(chalk.cyan('   make install'));
  }

  console.log(chalk.cyan('   make dev\n'));

  if (template === 'desktop') {
    console.log('📱 For Electron desktop app:\n');
    console.log(chalk.cyan('   # Terminal 1: Start web services'));
    console.log(chalk.cyan('   make dev\n'));
    console.log(chalk.cyan('   # Terminal 2: Start Electron'));
    console.log(chalk.cyan('   make electron\n'));
  }

  console.log('📚 Documentation:');
  console.log(chalk.gray(`   ${projectName}/README.md\n`));

  console.log(chalk.cyan('Happy coding! 🎉\n'));
}

main();

