## DB 사용

### Express 공부 중

    - "Helllo World" 출력해보기
    - express.js 설치

    ```javascript
    npm install express 
    ```

### SQL

    - SQLite 사용 
    - SQLiteStudio 사용
    - SQLite 설치

    ```javascript
    npm install sqlite
    ```

### 프레임워크 사용 이유 및 설명

    - 추가적으로 설치 

    ```javascript
    npm install core 
    ```
    
    - 설치 이유:
        cors: Cross-Origin Resource Sharing(CORS)는 웹 애플리케이션이 다른 도메인의 리소스에 접근할 수 있도록 하는 메커니즘입니다. 
        CORS 패키지는 Express 애플리케이션에서 CORS를 활성화하여 다른 도메인에서의 요청을 처리할 수 있게 해줍니다.

    - 사용한 기술 정리:

        1. express: Express.js는 Node.js 웹 애플리케이션을 위한 웹 프레임워크입니다. 
            이를 사용하면 웹 애플리케이션의 라우팅, 미들웨어, 요청 및 응답 처리 등을 쉽게 구현할 수 있습니다.

        2. sqlite3: SQLite는 경량 데이터베이스 엔진으로, 파일 기반의 데이터베이스를 제공합니다. 
            Node.js에서는 sqlite3 패키지를 사용하여 SQLite 데이터베이스를 조작할 수 있습니다. 
            이를 사용하면 간단한 데이터베이스를 사용하여 데이터를 저장하고 조회할 수 있습니다.

        3. path: Node.js의 기본 내장 모듈 중 하나로, 파일 및 디렉토리 경로를 조작하는 데 사용됩니다. 
            주로 파일 시스템과 관련된 작업에서 활용됩니다.

    - 사용한 이유 :
        이러한 패키지들을 함께 사용하면 Express.js를 통해 웹 애플리케이션을 만들고, 
        SQLite를 통해 데이터를 저장하고 조회할 수 있으며, 
        CORS를 활성화하여 다른 도메인에서의 요청을 처리할 수 있게 됩니다.