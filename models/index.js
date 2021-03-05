const User = require("./User");
const Post = require("./Post");
const Vote = require("./Vote");

User.hasMany(Post, {
    foreignKey: "user_id"
});

User.hasMany(User, {
    foreignKey: "user_id"
});

Post.hasMany(Post, {
    foreignKey: "post_id"
});

Post.belongsTo(User, {
    foreignKey: "user_id"
});

Vote.belongsTo(User, {
    foreignKey: "user_id"
});

Vote.belongsTo(Post, {
    foreignKey: "post_id"
});

User.belongsToMany(Post, {
    through: Vote,
    as: "voted_posts",
    foreignKey: "user_id"
});

Post.belongsToMany(User, {
    through: Vote,
    as: "voted_posts",
    foreignKey: "post_id"
});

module.exports = { User, Post, Vote };