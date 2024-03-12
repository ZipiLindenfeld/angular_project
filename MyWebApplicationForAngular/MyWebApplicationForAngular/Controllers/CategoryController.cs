using Microsoft.AspNetCore.Mvc;
using MyWebApplicationForAngular.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        public static List<Category> categories = new List<Category> { new Category("Art", "palette"),
                                                                       new Category("Writing", "create"),
                                                                       new Category("home management", "home_work") };
        // GET: api/<CategoryController>
        [HttpGet]
        public IEnumerable<Category> Get()
        {
            return categories;
        }

        // GET api/<CategoryController>/5
        [HttpGet("{id}")]
        public Category Get(int id)
        {
            return categories.Find(c => c.Id == id);
        }

        // POST api/<CategoryController>
        [HttpPost]
        public void Post([FromBody] Category value)
        {
            categories.Add(value);
        }

        // PUT api/<CategoryController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Category value)
        {
            var c = categories.Find(c => c.Id == id);
            if (c != null)
            {
                c.Name = value.Name;
                c.IconRouting = value.IconRouting;
            }
        }

        // DELETE api/<CategoryController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var c = categories.Find(c => c.Id == id);
            if (c != null)
                categories.Remove(c);
        }
    }
}
