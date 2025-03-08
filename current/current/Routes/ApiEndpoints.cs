using current.Models;
using Microsoft.EntityFrameworkCore;

public static class ApiEndpoints
{
    public static void MapApiEndpoints(this IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("/test");

        group.MapGet("/get", async (AppDbContext db) =>
        {
            var returnItems = await db.TodoItems.ToListAsync();
            System.Console.WriteLine("CALLED");
            return Results.Ok(returnItems);
        });

        group.MapPost("/add", async (TodoItem todo, AppDbContext db) =>
        {
            db.TodoItems.Add(todo);
            await db.SaveChangesAsync();
            return Results.Created($"/add/{todo.Id}", todo);
        });
}
}