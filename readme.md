<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=header&text=Team3&fontSize=90" />
</div>
<h1 align="center">
  <br>
  <a href="https://github.com/OJKSmITh/project1"><img src="https://user-images.githubusercontent.com/116360355/210193578-d3ac59c0-08dc-4bb3-a91e-6e489190d2c8.png" alt="환장의나라" width="200"></a>
  <br>
  환장의 나라
  <br>
</h1>


<br>
<br>
<h3 align="center">
  <a href="#Main">Main 페이지</a> •
  <a href="#Join">Join 페이지</a> •
  <a href="#Login">Login 페이지</a> •
  <a href="#Board">Board 페이지</a> •
  <a href="#Profile">Profile 페이지</a>
</h3>
<br>
<br>

<h1 align="center">사용 기술 </h1>
  <br>
 <h2 align="center">
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
  <br>
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <br>
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"> 
  <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> 
</h2>

# 시연 영상

<a href="https://youtu.be/NDrjzdRcOVA" >![screenshot](https://user-images.githubusercontent.com/112856532/210203867-59a9a6c1-6581-4c90-b2c2-2b3372ecc731.gif)</a>
<br>
<br>

## :bangbang: 구현해야할 필수 기능
<details>

<summary style="color: red;">필수 기능(삼각형 눌러서 펼쳐보기)</summary>
 


### 1. 메인페이지
- 카테고리
    - Home
    - Join
    - Board
    - Profile
    - Admin
### 2. Join페이지
- 항목
    - 아이디
    - 패스워드
    - 이름
    - 별명
    - 생년월일
    - 성별
    - 전화번호
    - 핸드폰번호
- 회원가입시 등급이 있다.
    - level 3: 최고관리자 
    - level 2 : 관리자 
    - level 1 : 사용자
    - level 0 : 승인 전 단계
-  Welcome페이지 :회원가입 내용을 확인할 수 있다.
    - 아이디
    - 이름
    - 성별
    - 전화번호
    - 핸드폰번호
    
### 3. Login페이지
- 로그인은 아이디와 패스워드 일치여부

### 4. Board페이지
- 테이블 항목
    - 순번
    - 제목
    - 작성자 [회원닉네임] 
    - 작성일
    - 조회수
회원만 들어올 수 있는 페이지
- 회원은 
    - 모든글 리스트보기
    - 모든 작성 글 보기
        - 글보기화면 볼경우 해당 글의 조회수를 +1
    - 새로운 글쓰기
    - 자신이 작성한 글 수정하기 
    - 자신의 글만 삭제 가능
- 관리자는 
    - 모든 글 수정 가능
    - 모든 글 삭제 가능
    
### 5. Profile페이지
로그인한 회원은 프로필 메뉴를 클릭할 수 있다.'
- 항목
    - 아이디
    - 이름
    - 성별
    - 전화번호 
    - 핸드폰 번호

### 6. Admin [선택사항]
- 최고관리자 전용 회원
- 최고관리자는 http://localhost/admin 강제로 이동시 관리자 페이지가 보입니다. 
- 최고관리자는 회원리스트에서 level 0~2 해당되는 모든 사람의 리스트를 볼수있습니다. 최고관리자는 회원리스트에서 회원보기가 가능합니다.
최고관리자는 회원리스트에서 레벨을 수정할수있습니다.
최고관리자는 회원을 이용 중지 할 수 있습니다.
</details>
<br>

<br><br><br>

# Main
<span>

- 비회원 메인 페이지는 로그인을 하지 않은 상태에서 제일 먼저 사이트로 들어오면 보이는 페이지

- 로그인을 한 상태에서는 회원용 메인페이지

- admin이라는 최고관리자 계정은 admin 메인 페이지를 보여준다.


>각 페이지는 각각 다른 페이지로 구성하였다.<br><br>
 메인 페이지에서 사진을 클릭하면 회원가입 때 넣었던 사진을 크게 볼 수 있다.<br><br>
 <a href="#시연-영상" target="_blank">시연영상</a>을 보면 메인페이지 밑에 항목들이 있다. 항목들은 `페럴렉스 스크롤링`을 이용하여 화면에 몰입을 줄 수 있도록 요소를 추가하여 작업 하였다.


 </span>
<br>
<br>
<details><summary style="color: red;"> 메인페이지 화면 보기</summary>


<h3 align="center">
    <br>
    <img width="85%" src="https://user-images.githubusercontent.com/112856532/210208605-2e87a414-0a13-4ae7-9f1c-2e794104ade9.png"/>
    <br>
    비회원 메인 페이지
    <br>  
<br>
</h3>

<h3 align="center">
    <br>
    <img width="85%" src="https://user-images.githubusercontent.com/112856532/210208609-8a98a55a-de64-487d-8a5b-7953c3f8f78a.png"/>
    <br>
    회원 메인 페이지
<br>
</h3>
<br>
<br>
<h3 align="center">
    <br>
    <img width="85%" src="https://user-images.githubusercontent.com/112856532/210208194-320fd3d0-eefc-4855-b6e9-73dbc71bd250.png"/>
    <br>
    admin 메인 페이지
<br>
</h3>
<br>
<br>
<h3 align="center">
    <br>
    <img width="85%" src="https://user-images.githubusercontent.com/112856532/210220178-860ba3d7-5587-4bba-80da-7d5837224a4c.png"/>
    <br>
    admin 메인 페이지
<br>
</h3>
<br>
<br>

</details>

<br>
<br>


# Join
- 항목의 값을 넣으면 다음 항목이 보이게 되고 다음 항목으로 넘어가게 되면 이전에 있었던 항목은 연하게 표현하였다.

- 이미지를 넣을 수 있다.

- 회원가입이 완료 되어 정보를 제출하게 되면, 회원가입시 기입한 정보를 welcome에서 확인할 수 있도록 페이지에서 구현할 수 있었다.

>중복체크를 할 수 있도록 하였고, 중복체크가 이루어지지 않은 경우, 다음 항목으로 이동할 수 없도록 했다.<br><br>
패스워드, 패스워드 확인을 이용하여 비밀번호에 오류가 생기지 않도록 유도하였다.  
**비밀번호가 일치합니다.** / **비밀번호가 일치하지 않습니다.** 로 출력이 된다.<br><br>
이미지를 넣는 방법은 express의 외장모듈 `multer` 를 이용하였다

<br><br>

<details><summary style="color: red;"> Join페이지 화면 보기</summary>
<h3 align="center">
    <br>
    <img width="85%" src="https://user-images.githubusercontent.com/112856532/210215614-ecf410ce-3772-440a-be4f-f97f1346fdc5.png"/>
    <br>
    회원 가입 페이지
<br>
</h3>
<h3 align="center">
    <br>
    <img width="85%" src="https://user-images.githubusercontent.com/112856532/210215611-826488ed-5e45-41e8-a92b-4110ccdbfb90.png"/>
    <br>
    회원 가입 후 welcome 페이지
<br>
</h3>
<br>
<br>
</details>
<br>
<br>


# Login
- 아이디와 패스워드를 적을 수 있는 공간
- 처음 방문하는 사람을 위한 회원가입 버튼을 만든다.

<br>
<br>
<details>

<summary style="color: red;">Login페이지 화면 보기</summary> 

<h3 align="center">
    <br>
    <img width="85%" src="https://user-images.githubusercontent.com/112856532/210208195-c7a2e8e4-dd89-4db0-a77f-3bbfdabd7349.png"/>
    <br>
    로그인 페이지
    <br>  
<br>
</h3>

</details>
<br>
<br>


# Board

- 게시물의 모든 항목을 보여준다.
- board에는 **list**, **write**, **view**, **modify** 가 있어서, 게시물을 보고, 쓰고, 확인하고, 수정할 수 있다.
- 조회수를 구현하여 view페이지를 들어가면 조회수가 +1씩 된다.
>페이징을 구현하여 한 페이지에 게시물이 10개가 넘어가면 페이지가 하나씩 생기며 각 페이지에 10개씩 보이게 된다.<br><br>작성자와 동일한 사람이 아니면 수정할 수 있는 기능은 막힌다.


<br>
<br>

<details>

<summary style="color: red;">Board페이지 화면 보기</summary> 

<h3 align="center">
    <br>
    <img width="85%" src="https://user-images.githubusercontent.com/112856532/210208189-95437ee3-7014-4f65-a4c6-c46caab2149a.png"/>
    <br>
    Board list 페이지
    <br>  
<br>
</h3>
<h3 align="center">
    <br>
    <img width="85%" src="https://user-images.githubusercontent.com/112856532/210208186-acfd7c3c-8619-408a-ae9c-2cfbb019d6e4.png"/>
    <br>
    Board write 페이지
    <br>  
<br>
</h3>
<h3 align="center">
    <br>
    <img width="85%" src="https://user-images.githubusercontent.com/112856532/210208182-830822c7-3f59-4732-ac2a-5df627815a03.png"/>
    <br>
    Board view 페이지
    <br>  
<br>
</h3>

<h3 align="center">
    <br>
    <img width="85%" src="https://user-images.githubusercontent.com/112856532/210208190-dfc85462-29c2-4778-b2a6-08ac826e5015.png"/>
    <br>
    Board view 페이지(다른 유저)
    <br>  
<br>
</h3>



</details>
<br>
<br>

# Profile
- 처음 회원가입을 했을 때 기입했던 내용을 볼 수 있다.
- 간단한 정보를 수정할 수 있다.
<br>
<br>

<details>

<summary style="color: red;">Profile페이지 화면 보기</summary> 

<h3 align="center">
    <br>
    <img width="85%" src="https://user-images.githubusercontent.com/112856532/210220179-e7ffdefd-7866-424f-aec3-7075b5a77889.png"/>
    <br>
    Profile view 페이지
    <br>  
<br>
</h3>
<h3 align="center">
    <br>
    <img width="85%" src="https://user-images.githubusercontent.com/112856532/210220180-104d46c3-8c4f-42a6-bfae-0bf40ff9c262.png"/>
    <br>
    Profile modify 페이지
    <br>  
<br>
</details>
<br>
<br>

# Admin
- user와 다른 페이지가 따로 있어서 모든 글에 접근 및 수정이 가능하고, 삭제까지 할 수 있다.
- 최초 회원가입을 하게 되면 admin의 승인이 있어야 로그인을 할 수 있으므로 모든 페이지의 접근이 막힌다.
<br>
<br>
<details>
<summary style="color: red;"> Admin 화면 보기</summary>
<h3 align="center">
    <br>
    <img width="85%" src="https://user-images.githubusercontent.com/112856532/210208194-320fd3d0-eefc-4855-b6e9-73dbc71bd250.png"/>
    <br>
    Admin main 페이지
    <br>  
<br>
</h3>
<h3 align="center">
    <br>
    <img width="85%" src="https://user-images.githubusercontent.com/112856532/210208193-a03e9456-6a62-496c-ab81-16013dcf15f5.png"/>
    <br>
    Admin 회원 관리 페이지
    <br>  
<br>
</h3>
<h3 align="center">
    <br>
    <img width="85%" src="https://user-images.githubusercontent.com/112856532/210208192-bcbc90e5-90fa-4b6b-939a-30c20d65f44b.png"/>
    <br>
    Admin board 페이지
    <br>  
<br>
</h3>
</details>
<br>
<br>


---
<br>

> [Github](https://github.com/OJKSmITh/project1) &nbsp;&middot;&nbsp;
> 백종환 <a href="mailto:baekbr13@gmail.com">Send mail</a> &nbsp;&middot;&nbsp;
> 장경호 <a href="mailto:csa0545@gmail.com">Send mail</a>
  
<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=footer&text=Thanks!&fontSize=90" />
</div>

