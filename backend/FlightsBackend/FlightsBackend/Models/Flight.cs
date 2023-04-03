namespace FlightsBackend.Models
{
    public class Flight
    {
        public int Id { get; set; }
        public string from { get; set; } = string.Empty;
        public string to { get; set; } = string.Empty;
        public string takeOffTime { get; set; } = string.Empty;
        public string arrivalTime { get; set; } = string.Empty;
        public string planeType { get; set;} = string.Empty;
        public string normalClassTickets { get; set; } = string.Empty;
        public string businessClassTickets { get; set; } = string.Empty;
        public int normalClassPrice { get; set; }
        public int businessClassPrice { get; set; }
    }
}
