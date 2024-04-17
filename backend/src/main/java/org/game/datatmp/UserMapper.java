package org.game.datatmp;

import org.game.models.User;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserMapper implements RowMapper<User> {
    @Override
    public User mapRow(ResultSet resultSet, int i) throws SQLException {
        User user = new User();

        user.setId(resultSet.getInt("id"));
        user.setNickname(resultSet.getString("nickname"));
        user.setEmail(resultSet.getString("email"));

        return user;
    }
}
