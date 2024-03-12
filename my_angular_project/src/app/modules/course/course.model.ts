export class Course {
    id: number;
    name: string;
    description: string;
    categoryId: number;
    countLessons: number;
    startDate: Date;
    syllabus: string[];
    learningType: LearningType;
    lecturerId: number;
    img: string;
    constructor() {
        this.id = -1;
    }

    // constructor(id: number = 0, name: string = "", description: string = "", categoryId: number = 0, countLessons: number = 0, startDate: Date = new Date(), syllabus: string[] = [], learningType: LearningType = 1, lecturerId: number = 0, img: string = "") {
    //     this.id = id;
    //     this.name = name;
    //     this.description = description;
    //     this.categoryId = categoryId;
    //     this.countLessons = countLessons;
    //     this.startDate = startDate;
    //     this.syllabus = syllabus;
    //     this.learningType = learningType;
    //     this.lecturerId = lecturerId;
    //     this.img = img;
    // }
}
export enum LearningType {
    Frontal = 0,
    Zoom = 1,
}