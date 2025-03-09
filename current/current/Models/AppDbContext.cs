using Microsoft.EntityFrameworkCore;

namespace current.Models
{
    public class AppDbContext : DbContext
    {
        public DbSet<TodoItem> TodoItems { get; set; }
        public DbSet<User> Users { get; set; }
        
        // run 
        // dotnet ef migrations add name
        // dotnet ef database update

        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }
    }
}