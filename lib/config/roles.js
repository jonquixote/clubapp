 var users = [];

 _.each(users, function (user) {
    var id;

    id = Accounts.createUser({
      email: user.email,
      password: "",
      profile: { name: user.name }
    });

    if (user.roles.length > 0) {
      // Need _id of existing user record so this call must come 
      // after `Accounts.createUser` or `Accounts.onCreate`
      Roles.addUsersToRoles(id, user.roles, 'guest');
    }

  });