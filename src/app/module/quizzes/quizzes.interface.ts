export interface IQuizz {
    id:string;
    subject:string;
    questions : IQuestion[]
}


interface IAnswer {
    option:string;
    isCorrect:boolean;
}

interface IQuestion {
    name:string;
    answer:IAnswer[]
}