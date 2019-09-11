using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace DemoAPI.Models
{
  public class User
  {
    [BsonId]
    public string userId { get; set; }
    public string userName { get; set; }
    public string userCity { get; set; }
    public string userEmail { get; set; }
    public string userPhone { get; set; }
  }
}