namespace FlightsBackend.Models
{
    public class Reservation
    {
        public int Id { get; set; }
        public string firstName { get; set; } = string.Empty;
        public string secondName { get; set; } = string.Empty;
        public string lastName { get; set; } = string.Empty;
        public string personalID { get; set; } = string.Empty;
        public string telephoneNumber { get; set; } = string.Empty;
        public string nationality { get; set; } = string.Empty;
        public string ticketType { get; set; } = string.Empty;
        public int flightID { get; set; }
    }
}
