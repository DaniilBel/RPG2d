package org.game.datatmp;

import org.game.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class UserDAO {
    private static int id = 1;
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public UserDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<User> index() {
        return jdbcTemplate.query("SELECT * FROM \"Player\"", new UserMapper());
    }

    public User show(int id) {
        return jdbcTemplate.query("SELECT * FROM \"Player\" WHERE id=?", new Object[]{id},
                        new BeanPropertyRowMapper<>(User.class))
                .stream().findAny().orElse(null);
    }

    public void save(User user) {
        jdbcTemplate.update("INSERT INTO \"Player\" VALUES (1, ?, ?)", user.getNickname(),
                user.getEmail());
        id++;
    }

    public void update(int id, User updatedUser) {
        jdbcTemplate.update("UPDATE \"Player\" SET nickname=?, email=? WHERE id=?",
                updatedUser.getNickname(),
                updatedUser.getEmail(), id);
    }

    public void delete(int id) {
        jdbcTemplate.update("DELETE FROM \"Player\" WHERE id=?", id);
    }
}
