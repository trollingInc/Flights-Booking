﻿// <auto-generated />
using FlightsBackend.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace FlightsBackend.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("FlightsBackend.Models.Flight", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("arrivalTime")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("businessClassPrice")
                        .HasColumnType("int");

                    b.Property<string>("businessClassTickets")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("from")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("normalClassPrice")
                        .HasColumnType("int");

                    b.Property<string>("normalClassTickets")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("planeType")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("takeOffTime")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("to")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Flights");
                });

            modelBuilder.Entity("FlightsBackend.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("username")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });
#pragma warning restore 612, 618
        }
    }
}