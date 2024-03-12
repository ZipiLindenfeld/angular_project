namespace MyWebApplicationForAngular.Models
{
    public class Lecturer
    {
        static int index = 0;
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public Lecturer(string fullName, string address, string email, string password)
        {
            Id = index++;
            FullName = fullName;
            Address = address;
            Email = email;
            Password = password;
        }
        public Lecturer()
        {

        }
    }
}
