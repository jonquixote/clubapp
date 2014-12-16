AccountsTemplates.configureRoute('signIn', {
    name: 'signin',
    path: '/login',
    template: 'logindex',
    layoutTemplate: 'logindex',
    redirect: '/home',
});

AccountsTemplates.configureRoute('signUp', {
    name: 'signUp',
    path: '/sign-up',
    template: 'mysignup',
    layoutTemplate: 'mysignup',
    redirect: '/home',
});

AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
      _id: "username",
      type: "text",
      displayName: "username",
      required: true,
      minLength: 5,
  },
  {
      _id: 'email',
      type: 'email',
      required: true,
      displayName: "email",
      re: /.+@(.+){2,}\.(.+){2,}/,
      errStr: 'Invalid email',
  },
  {
      _id: 'username_and_email',
      type: 'text',
      required: true,
      displayName: "Login",
      placeholder: "Username or Email"
  }
]);