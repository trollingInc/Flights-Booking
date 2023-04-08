using FlightsBackend.Data;
using FlightsBackend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FlightsBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReservationController : ControllerBase
    {
        private readonly DataContext _context;
        public ReservationController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Reservation>>> GetReservations()
        {
            return Ok(await _context.Reservations.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<Reservation>> MakeReservation(Reservation request)
        {
            var flights = await _context.Flights.FirstOrDefaultAsync(check => check.Id == request.flightID);
            if (flights == null) { return BadRequest("Flight not found"); }

            _context.Reservations.Add(request);
            await _context.SaveChangesAsync();
            return Ok("Booked a flight");
        }

        [HttpDelete]
        public async Task<ActionResult<Reservation>> DeleteReservations(int id)
        {
            //var allReservations = await _context.Reservations.ToListAsync();
            var dbreservations = from reservations in _context.Reservations
                         where reservations.flightID == id
                         select reservations;
            var allreservations = await dbreservations.ToListAsync();
            for (int i = 0; i < allreservations.Count; i++)
            {
                _context.Reservations.Remove(allreservations[i]);
                await _context.SaveChangesAsync();
            }
            return Ok("successfully deleted.");
        }

        [HttpDelete]
        [Route("DeleteSingleReservation")]
        public async Task<ActionResult<Reservation>> DeleteReservation(int id)
        {
            var request = await _context.Reservations.FindAsync(id);
            if(request == null) { return BadRequest("Reservation with this ID does not exist."); }
            _context.Reservations.Remove(request);
            await _context.SaveChangesAsync();
            return Ok("Successfully deleted.");
        }
    }
}
