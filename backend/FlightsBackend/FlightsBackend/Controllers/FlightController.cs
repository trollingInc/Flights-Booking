using FlightsBackend.Data;
using FlightsBackend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FlightsBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlightController : ControllerBase
    {
        private readonly DataContext _context;
        public FlightController(DataContext context) 
        {
            _context= context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Flight>>> GetFlights()
        {
            return Ok(await _context.Flights.ToListAsync());
        }

       /* [HttpGet]
        public async Task<ActionResult<Flight>> GetFlight(int id)
        {
            var flight = await _context.Flights.FindAsync(id);
            if (flight == null)
            {
                return BadRequest("id not found");
            }
            return Ok(flight);
        } */

        [HttpPost]
        public async Task<ActionResult<List<Flight>>> AddFlight(Flight flight)
        {
            if (flight == null) { return BadRequest(); }
            /*var dbflight = await _context.Flights.FindAsync(flight.Id);
            if(dbflight== null) { return NotFound("it just wasnt found man"); }
            if (flight.businessClassPrice == 0 && flight.normalClassPrice == 0)
            {
                return Ok(await _context.Flights.FindAsync(flight.Id));
            }*/
            _context.Flights.Add(flight);
            await _context.SaveChangesAsync();
            return Ok(await _context.Flights.ToListAsync());
        }

        [HttpPost]
        [Route("GetFlight")]
        public async Task<ActionResult<Flight>> GetFlight(Flight flight)
        {
            var dbflight = await _context.Flights.FindAsync(flight.Id);
            if (dbflight == null) { return NotFound("id of flight not find"); }
            if (flight.businessClassPrice == 0 && flight.normalClassPrice == 0)
            {
                return Ok(dbflight);
            }
            return BadRequest("something is wrong");
            //return Ok("good");
        }

        /*[HttpGet]
        public async Task<ActionResult<Flight>> GetFlights(Flight flight)
        {
            var dbflight = await _context.Flights.FindAsync(flight.Id);
            if (dbflight == null)
            {
                return BadRequest("id not found");
            }
            return Ok(dbflight);
        }*/

        [HttpPut]
        public async Task<ActionResult<List<Flight>>> UpdateFlight(Flight flight)
        {
            var dbflight = await _context.Flights.FindAsync(flight.Id);
            if (dbflight == null)
            {
                return BadRequest("id not found");
            }
            dbflight.from = flight.from;
            dbflight.to = flight.to;
            dbflight.arrivalTime = flight.arrivalTime;
            dbflight.takeOffTime= flight.takeOffTime;
            dbflight.businessClassPrice= flight.businessClassPrice;
            dbflight.businessClassTickets= flight.businessClassTickets;
            dbflight.normalClassTickets= flight.normalClassTickets;
            dbflight.normalClassPrice= flight.normalClassPrice;
            dbflight.planeType= flight.planeType;

            await _context.SaveChangesAsync();
            return Ok(dbflight);
        }

        [HttpDelete]
        public async Task<ActionResult<List<Flight>>> DeleteFlight(int id)
        {
            var flight = await _context.Flights.FindAsync(id);
            if (flight == null) 
            {
                return BadRequest("flight id not found");
            }
            _context.Flights.Remove(flight);
            await _context.SaveChangesAsync();
            return Ok(await _context.Flights.ToListAsync());
        }
    }
}
