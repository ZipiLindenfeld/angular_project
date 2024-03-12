namespace Server
{
    public class User
    {
        static int index = 0;
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public bool IsLecturer { get; set; }
        public string? CourseName { get; set; }
        public User(string fullName, string address, string email, string password, bool isLecturer, string courseName)
        {
            Id = index++;
            FullName = fullName;
            Address = address;
            Email = email;
            Password = password;
            IsLecturer = isLecturer;
            CourseName = courseName;
        }
        public User()
        {

        }

    }
}
