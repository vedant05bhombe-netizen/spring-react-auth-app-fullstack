package Login_Page.Login_page.Controller;

import Login_Page.Login_page.Dto.LoginRequestDto;
import Login_Page.Login_page.Dto.LoginResponseDto;
import Login_Page.Login_page.Dto.SignupResponseDto;
import Login_Page.Login_page.Security.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {


    private final AuthService authService;
    @PostMapping("/login")
    public ResponseEntity<LoginResponseDto> login (@RequestBody LoginRequestDto dto) {
       return ResponseEntity.ok(authService.login(dto));
    }

     @PostMapping("/signup")
    public ResponseEntity<SignupResponseDto> signup (@RequestBody  LoginRequestDto signupRequest){
       return ResponseEntity.ok(authService.signup(signupRequest));
    }




}
