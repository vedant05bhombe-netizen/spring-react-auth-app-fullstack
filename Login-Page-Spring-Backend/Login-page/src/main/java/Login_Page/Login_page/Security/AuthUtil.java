package Login_Page.Login_page.Security;

import Login_Page.Login_page.Entity.UserEntity;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;

@Component
public class AuthUtil {
    @Value("${jwt.secretKey}")
    private String jwtSecurityKey ;

    private SecretKey getSecretKey() {

        return Keys.hmacShaKeyFor(jwtSecurityKey.getBytes(StandardCharsets.UTF_8));
    }

      public   String generateAccessToken(UserEntity user){

     return Jwts.builder()
             .subject(user.getUsername())
             .claim("userId" ,user.getId().toString())
             .issuedAt(new Date())
             .expiration(new Date(System.currentTimeMillis() + 1000*60*10))
             .signWith(getSecretKey())
             .compact();
    }
}

