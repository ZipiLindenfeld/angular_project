using Microsoft.AspNetCore.Mvc;
using MyWebApplicationForAngular.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LecturerController : ControllerBase
    {
        public static List<Lecturer> lecturers = new List<Lecturer>() { new Lecturer("AAA","AAA","AAA@gmail.com","Aa1234"),
                                                                        new Lecturer("BBB","BBB","BBB@gmail.com","Bb1234"),
                                                                        new Lecturer("CCC","CCC","CCC@gmail.com","Cc1234"),
                                                                        new Lecturer("DDD","DDD","DDD@gmail.com","Dd1234")
        };
        // GET: api/<LecturerController>
        [HttpGet]
        public IEnumerable<Lecturer> Get()
        {
            return lecturers;
        }

        // GET api/<LecturerController>/5
        [HttpGet("{name}")]
        public Lecturer Get(string name)
        {
            return lecturers.Find(l => l.FullName == name);
        }

        // POST api/<LecturerController>
        [HttpPost]
        public void Post([FromBody] Lecturer value)
        {
            lecturers.Add(value);
        }

        // PUT api/<LecturerController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Lecturer value)
        {
            var l = lecturers.Find(l => l.Id == id);
            if (l != null)
            {
                l.Email = value.Email;
                l.Address = value.Address;
                l.FullName = value.FullName;
                l.Password = value.Password;
            }
        }

        // DELETE api/<LecturerController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var l = lecturers.Find(l => l.Id == id);
            if (l != null)
                lecturers.Remove(l);
        }
    }
}
