﻿using FlightsBackend.Data;
using FlightsBackend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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
            var usname = await _context.Users.FindAsync(user.Id);
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

        /*[HttpPost]
        public async Task<ActionResult<List<User>>> AddUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return Ok(await _context.Users.ToListAsync());
        }*/
    }
}
