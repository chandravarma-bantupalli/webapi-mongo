using System;
using System.Collections.Generic;
using System.Linq;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Xml.Serialization;

namespace DemoAPI.Models
{
  public class Friend
  {
    [XmlIgnore]
    public ObjectId _id { get; set; }
    public string friendId {
      get{
        return _id.ToString();
      }
      set{
        _id = ObjectId.Parse(value);
      }
    }
    public string friendName { get; set; }
  }
}