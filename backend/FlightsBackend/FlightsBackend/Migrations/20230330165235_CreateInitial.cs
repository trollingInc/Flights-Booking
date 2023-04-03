using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FlightsBackend.Migrations
{
    /// <inheritdoc />
    public partial class CreateInitial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Flights",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    from = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    to = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    takeOffTime = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    arrivalTime = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    planeType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    normalClassTickets = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    businessClassTickets = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    normalClassPrice = table.Column<int>(type: "int", nullable: false),
                    businessClassPrice = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Flights", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Flights");
        }
    }
}
