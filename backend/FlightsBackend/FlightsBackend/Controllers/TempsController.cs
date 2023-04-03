using FlightsBackend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FlightsBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TempsController : ControllerBase
    {
        private static List<Temps> bookID = new List<Temps>();

        [HttpPost]
        public async Task<ActionResult<Temps>> CreateTemp(Temps temp)
        {
            Temps _id = new Temps();
            _id.ID= temp.ID;
            bookID.Add(_id);
            return Ok(bookID[0].ID);
        }

        [HttpGet]
        public async Task<ActionResult<Temps>> GetTemp()
        {
            Temps tempid= new Temps();
            tempid.ID = bookID[0].ID;
            bookID.Clear();
            return Ok(tempid);
        }
    }
}
