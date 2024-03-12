using static System.Net.Mime.MediaTypeNames;

namespace MyWebApplicationForAngular.Models
{
    public enum LearningType { Frontal = 0, Zoom = 1 }
    public class Course
    {
        static int index = 0;
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int CategoryId { get; set; }
        public int CountLessons { get; set; }
        public string StartDate { get; set; }
        public string[] Syllabus { get; set; }
        public LearningType LearningType { get; set; }
        public int LecturerId { get; set; }
        public string Img { get; set; }
        public Course(string name,string description, int categoryId, int countLessons, string startDate, string[] syllabus, LearningType learningType, int lecturerId, string img)
        {
            Id = index++;
            Name = name;
            Description = description;
            CategoryId = categoryId;
            CountLessons = countLessons;
            StartDate = startDate;
            Syllabus = syllabus;
            LearningType = learningType;
            LecturerId = lecturerId;
            Img = img;
        }
        public Course()
        {

        }
    }
}