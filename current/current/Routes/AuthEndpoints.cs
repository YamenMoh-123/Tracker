using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System;
using System.Text.Json;
using current.Models;
using Microsoft.EntityFrameworkCore;

namespace current.Routes
{
    public static class AuthEndpoints
    {
        public static void MapAuthEndpoints(this IEndpointRouteBuilder app)
        {
            var group = app.MapGroup("/auth");
            group.MapPost("/signup", async (HttpContext context, AppDbContext dbContext) =>
            {
                using var reader = new StreamReader(context.Request.Body);
                var bodyContent = await reader.ReadToEndAsync();
                var requestBody = JsonSerializer.Deserialize<User>(bodyContent);
                Console.WriteLine("Received POST data:");
                Console.WriteLine(requestBody.Email);
                
                var hashedPassword = BCrypt.Net.BCrypt.HashPassword(requestBody.Password);
                requestBody.Password = hashedPassword;

                dbContext.Users.Add(requestBody);
                await dbContext.SaveChangesAsync();
                
                return Results.Ok("Data received successfully");
            });


            // for testing
            group.MapGet("/get", async (AppDbContext db) =>
            {
                var returnItems = await db.Users.ToListAsync();
                return Results.Ok(returnItems);
            });

        }
    }
}
