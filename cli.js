#!/usr/bin/env node
import fs from 'fs';
import { mdToPdf } from 'md-to-pdf';   // paquete oficial ES-friendly
import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();
program
  .name('md2pdf')
  .description('Convert Markdown → PDF with emoji support')
  .version('1.0.0')
  .argument('<input>', 'archivo .md')
  .option('-o, --output <file>', 'nombre del pdf de salida', 'out.pdf')
  .action(async (input, opts) => {
    try {
      console.log(chalk.blue('🚀 Convirtiendo…'), input);
      const pdf = await mdToPdf({ content: fs.readFileSync(input, 'utf8') }, {
        pdf_options: { format: 'A4', margin: '20mm' },
        stylesheet: ['https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.1.0/github-markdown.min.css'],
      });
      fs.writeFileSync(opts.output, pdf.content);
      console.log(chalk.green('✅ PDF guardado en'), opts.output);
    } catch (err) {
      console.error(chalk.red('❌ Error:'), err.message);
      process.exit(1);
    }
  });

program.parse();