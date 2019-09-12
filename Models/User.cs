using System;
using System.Collections.Generic;
using MongoDB.Bson;
using System.Linq;
using MongoDB.Bson.Serialization.Attributes;
using System.Xml.Serialization;

namespace DemoAPI.Models
{
  public class User
  {
    [XmlIgnore]
    public ObjectId _id { get; set; }
    public string userId {
      get
      {
        return _id.ToString();
      }
      set
      {
        _id = ObjectId.Parse(value);
      }
    }
    public string userName { get; set; }
    public string userCity { get; set; }
    public string userEmail { get; set; }
    public string userPhone { get; set; }
    public string friends 
    { 
      get 
      {
        return String.Join(',', this.userFriends.Select(x => x.friendName).ToList());
      }

      set 
      {

      }
    }
    public List<Friend> userFriends { get; set; }
  }
}