
'use server';
/**
 * @fileOverview A flow for summarizing and translating field notes.
 *
 * - summarize - A function that handles the summarization process.
 * - SummarizeInput - The input type for the summarize function.
 * - SummarizeOutput - The return type for the summarize function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

export const SummarizeInputSchema = z.object({
  notes: z.string().describe('The field notes to be summarized.'),
  language: z.string().describe('The language to translate the summary into.'),
});
export type SummarizeInput = z.infer<typeof SummarizeInputSchema>;

export const SummarizeOutputSchema = z.object({
  summary: z.string().describe('The summarized and translated text.'),
});
export type SummarizeOutput = z.infer<typeof SummarizeOutputSchema>;

export async function summarize(input: SummarizeInput): Promise<SummarizeOutput> {
  return summarizeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizePrompt',
  input: {schema: SummarizeInputSchema},
  output: {schema: SummarizeOutputSchema},
  prompt: `You are an expert summarizer for a ministry organization. Your task is to summarize the following field notes and translate the summary into {{language}}.

The summary should be concise, capturing the key activities, outcomes, and any challenges mentioned.

Field Notes:
"{{{notes}}}"

Please provide the final summary in {{language}}.
`,
});

const summarizeFlow = ai.defineFlow(
  {
    name: 'summarizeFlow',
    inputSchema: SummarizeInputSchema,
    outputSchema: SummarizeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
