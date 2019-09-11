using System;
using System.Collections.Generic;
using DemoAPI.Models;

namespace DemoAPI.BusinessLayer
{
  public interface IUserService
  {
    void addUser(User u);
    User getUserById(string userId);
    List<User> getAllUsers();
    bool updateUser(string userId, User u);
    bool deleteUser(string userId);      
  }
}