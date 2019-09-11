using System;
using System.Collections.Generic;
using DemoAPI.Models;

namespace DemoAPI.DataAccessLayer
{
  public interface IUserRepository
  {
    void addUser(User u);
    List<User> getAllUsers();
    User getUserById(string userId);
    bool updateUserById(string userId, User u);
    bool deleteUserById(string userId);
  }
}