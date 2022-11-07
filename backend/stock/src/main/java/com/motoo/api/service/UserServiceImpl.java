package com.motoo.api.service;

import com.motoo.api.dto.user.AccountStockInfo;
import com.motoo.api.request.UpdateUserPutReq;
import com.motoo.common.auth.AppUserDetails;
import com.motoo.db.entity.*;
import com.motoo.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.function.Supplier;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final AccountService accountService;



    @Override
    public Long getUserIdByToken(Authentication authentication) {
        AppUserDetails userDetails=(AppUserDetails)authentication.getDetails();
        Long id= userDetails.getUserId();
        return id;
    }

    @Override
    public String getUserEmailByToken(Authentication authentication) {
        AppUserDetails userDetails=(AppUserDetails)authentication.getDetails();
        String email= userDetails.getUsername();
        return email;
    }

    @Override
    public Optional<User> getByUserId(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public Optional<User> getByUserEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public Long signupUser(String email, String nickname) {
        User newUser = new User();
        newUser.createUser(email, nickname);
        userRepository.save(newUser);
        return newUser.getUserId();
    }

    @Override
    public void updateCurrent(Long userId, int current) {
        User user = userRepository.findByUserId(userId).get();
        user.updateCurrent(current);
        userRepository.save(user);
    }


    @Override
    public void deleteUser(Long id) {
//        userRepository.delete(userRepository.findById(id).orElseThrow(new Supplier<IllegalArgumentException>() {
//            @Override
//            public IllegalArgumentException get() {
//                return new IllegalArgumentException("해당 id의 user가 없습니다.");
//            }
//        }));
        userRepository.deleteByUserId(id);
    }



    @Override
    public Long updateNickname(Long id, String nickname) {
        User user = getByUserId(id).orElseGet(() -> new User());
        user.updateNickname(nickname);
        userRepository.save(user);
        return user.getUserId();
    }

    @Override
    public int updateUser(User user, UpdateUserPutReq updateUserPutReq) {
        return 0;
    }

    @Override
    public List<String> getFavoriteStockCode(Optional<User> user) {
        List<FavoriteStock> favoriteStocks = user.get().getFavoriteStocks();
        List<String> stockCode = favoriteStocks.stream().map(favoriteStock -> {
            Stock stock = favoriteStock.getStock();
            return stock.getTicker();
        }).collect(Collectors.toList());
        return stockCode;
    }
    @Override
    public int getAccountSeed(Optional<User> user) {
        Long userId = user.get().getUserId();
        int current = user.get().getCurrent();
        Long accountId = Long.valueOf(current);
        Account account = accountService.getAccount(accountId, userId);
        int seed = account.getSeed();
        return seed;
    }

    @Override
    public List<AccountStockInfo> getStockInfo(Optional<User> user) {
        Long userId = user.get().getUserId();
        int current = user.get().getCurrent();
        Long accountId = Long.valueOf(current);
        Account account = accountService.getAccount(accountId, userId);
        List<AccountStock> accountStocks = account.getAccountStocks();

        List<AccountStockInfo> accountStockInfoList = accountStocks.stream().map(accountStock -> {
            Long stockId = accountStock.getStock().getStockId();
            String ticker = accountStock.getStock().getTicker();
            int amount = accountStock.getAmount();
            AccountStockInfo accountStockInfo = new AccountStockInfo();
            accountStockInfo.setStockId(stockId);
            accountStockInfo.setTicker(ticker);
            accountStockInfo.setAmount(amount);
            return accountStockInfo;
        }).collect(Collectors.toList());
        return accountStockInfoList;
    }

}
