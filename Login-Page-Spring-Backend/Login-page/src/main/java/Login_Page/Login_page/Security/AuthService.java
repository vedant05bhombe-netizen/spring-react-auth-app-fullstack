package Login_Page.Login_page.Security;

import Login_Page.Login_page.Dto.LoginRequestDto;
import Login_Page.Login_page.Dto.LoginResponseDto;
import Login_Page.Login_page.Dto.SignupResponseDto;
import Login_Page.Login_page.Entity.UserEntity;
import Login_Page.Login_page.Repo.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private AuthUtil authUtil;

    private final AuthenticationManager authenticationManager;
    private final UserRepo userRepo;

    public LoginResponseDto login(LoginRequestDto userDto) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(userDto.getUsername(), userDto.getPassword())
        );
        UserEntity userEntity = (UserEntity) authentication.getPrincipal();

        String token = authUtil.generateAccessToken(userEntity);

        return new LoginResponseDto(token, userEntity.getId());


    }

    public SignupResponseDto signup(LoginRequestDto signupRequest) {
        UserEntity user = userRepo.findByUsername(signupRequest.getUsername()).orElse(null);

        if(user != null) throw new BadCredentialsException("user already exists");
        user = userRepo.save( UserEntity.builder()
                .username(signupRequest.getUsername())
                .password(signupRequest.getPassword())
                .build()
        );
        return new SignupResponseDto(user.getId(), user.getUsername());
    }
}