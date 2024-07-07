import { z } from 'zod';

const AnswerSchema = z.object({
    option: z.string(),
    isCorrect: z.boolean(),
});

const QuestionSchema = z.object({
    name: z.string(),
    answer: z.array(AnswerSchema),
});

const quizzSchemaValidation = z.object({
    body:z.object({
        subject: z.string(),
        questions: z.array(QuestionSchema),
    })
});

type IAnswer = z.infer<typeof AnswerSchema>;
type IQuestion = z.infer<typeof QuestionSchema>;
type IQuizz = z.infer<typeof quizzSchemaValidation>;

// Export the schemas and types
export const quizzesValidation = {
    quizzSchemaValidation
}