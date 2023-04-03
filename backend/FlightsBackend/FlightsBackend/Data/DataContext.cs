using FlightsBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace FlightsBackend.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Flight> Flights { get; set; }

        public DbSet<User> Users { get; set; }
    }
}
