using System;
using System.Collections.Generic;
using MongoDB.Driver;
using Microsoft.Extensions.Configuration;
using DemoAPI.Models;

namespace DemoAPI.DataAccessLayer
{
  public class UserDBContext
  {
    MongoClient mongo;
    IMongoDatabase database;
    public UserDBContext(IConfiguration config)
    {
      mongo = new MongoClient(config.GetSection("MongoDB:server").Value);
      database = mongo.GetDatabase(config.GetSection("MongoDB:database").Value);
    }
    public IMongoCollection<User> Users => database.GetCollection<User>("Users");
  }
}