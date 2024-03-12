import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'learningTypeIcon' })
export class LearningTypeIconPipe implements PipeTransform {
    transform(value: number): string {
        return value === 1 ? 'people' : 'desktop_windows';
    }
}