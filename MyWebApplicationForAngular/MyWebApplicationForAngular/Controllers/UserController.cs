using Microsoft.AspNetCore.Mvc;
using MyWebApplicationForAngular.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public static List<User> users = new List<User>() { new User("AAA","AAA","AAA@gmail.com","Aa1234",true,"AAA"),
                                                            new User("BBB","BBB","BBB@gmail.com","Bb1234",false,"BBB"),
                                                            new User("CCC","CCC","CCC@gmail.com","Cc1234",true,"CCC"),
                                                            new User("DDD","DDD","DDD@gmail.com","Dd1234",false,"DDD")
        };
        // GET: api/<UserController>
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return users;
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public User Get(int id)
        {
            return users.Find(u => u.Id == id);
        }
        // GET api/<LecturerController>/5
        [HttpGet("{name}")]
        public User Get(string name)
        {
            return users.Find(l => l.FullName == name);
        }

        // POST api/<UserController>
        [HttpPost]
        public void Post([FromBody] User value)
        {
            users.Add(value);
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Lecturer value)
        {
            var u = users.Find(u => u.Id == id);
            if (u != null)
            {
                u.Email = value.Email;
                u.Address = value.Address;
                u.FullName = value.FullName;
                u.Password = value.Password;
            }
        }

        // DELETE api/<LecturerController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var l = users.Find(l => l.Id == id);
            if (l != null)
                users.Remove(l);
        }
    }
}
