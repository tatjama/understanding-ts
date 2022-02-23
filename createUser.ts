/*registerUser = async ( registerUserDto: RegisterUserDto ): Promise<number> => { 
    //console.log(name);
    User.addHook( 'afterCreate', 'createCompanyId',async ( user, options ) => {
      const name = registerUserDto.profile.company.name? registerUserDto.profile.company.name: registerUserDto.username
  
      console.log("----")
      console.log(name);
      console.log(user.getDataValue('profile').company.id)
      await Company.update({ companyOwner: user.getDataValue( 'id' ) }, {           
      where: { id: user.getDataValue('profile').company.id },
      transaction: options.transaction
    });
    
  });

  
  
  const newUser = await sequelize.transaction( async t => {
    return await User.create(registerUserDto,  {
      include: [{
        association: User.hasOne( Profile ),
        include: [ Profile.belongsTo( Company )]}          
    ],
      transaction: t
    });        
  }); 
  
  User.removeHook('afterCreate', 'createCompanyId');
  return newUser.id;

}*/