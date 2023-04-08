using FlightsBackend.Data;
using FlightsBackend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FlightsBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DataContext _context;
        public UserController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<User>> GetUsers()
        {
            return Ok("sas");
        }

        [HttpPost]
        public async Task<ActionResult<User>> CheckCredentials(User user)
        {
            var usname = await _context.Users.FirstOrDefaultAsync(check => check.username == user.username);
            if (usname == null)
            {
                return BadRequest("wrong id");
            }
            if (usname.username == user.username && usname.password == user.password)
            {
            return Ok("exists");
            }
            return BadRequest("wrong credentials");
        }

        [HttpPost]
        [Route("AddUser")]
        public async Task<ActionResult<List<User>>> AddUser(User user)
        {
            var dbuser = from users in _context.Users
                         where users.username == user.username
                         select users;
            if (dbuser == null)
            {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return Ok(await _context.Users.ToListAsync());
            }
            return BadRequest("Username is taken");
        }
    }
}
