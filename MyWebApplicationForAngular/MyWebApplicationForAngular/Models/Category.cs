namespace MyWebApplicationForAngular.Models
{
    public class Category
    {
        static int index = 0;
        public int Id { get; set; }
        public string Name { get; set; }
        public string IconRouting { get; set; }
        public Category(string name, string iconRouting)
        {
            Id = index++;
            Name = name;
            IconRouting = iconRouting;
        }
        public Category()
        {

        }
    }
}
