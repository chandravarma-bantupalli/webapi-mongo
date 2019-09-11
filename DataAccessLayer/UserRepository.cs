using System;
using System.Collections.Generic;
using System.Linq;
using MongoDB.Driver;
using DemoAPI.Models;

namespace DemoAPI.DataAccessLayer
{
  public class UserRepository: IUserRepository
  {
    private readonly UserDBContext context;
    public UserRepository(UserDBContext userDBContext)
    {
      context = userDBContext;
    }
    public void addUser(User u)
    {
      context.Users.InsertOne(u);
    }
    public List<User> getAllUsers()
    {
      return context.Users.Find(_ => true).ToList();
    }
    public User getUserById(string userId)
    {
      return context.Users.Find(u => u.userId == userId).SingleOrDefault();
    }
    public bool updateUserById(string userId, User u)
    {
      var reqUser = Builders<User>.Filter.Where(_u => _u.userId == userId);
      if(reqUser != null)
      {
        var result = context.Users.ReplaceOne(reqUser, u);
        return (result.ModifiedCount > 0);
      }
      else 
      {
        return false;
      }
    }
    public bool deleteUserById(string userId)
    {
      var reqUser = Builders<User>.Filter.Where(_u => _u.userId == userId);
      if(reqUser != null)
      {
        var result = context.Users.DeleteOne(reqUser);
        return (result.DeletedCount > 0);
      }      
      else
      {
        return false;
      }
    }
  }
}