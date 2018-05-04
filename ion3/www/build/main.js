webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_database_service__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, database) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.database = database;
        this.database.connectToDatabaseAndCreateTables().then(function () {
            _this.database.createProject("haha", "hoho", "holead", "asdf").then(function (result) {
                return _this.database.getRecoveryKeyForProjectId(result.insertId);
            }).then(function (result) {
                var recoveryKey = result.rows.item(0).recoveryKey;
            }).catch(function (e) {
                // handle error?!
                console.log("omg");
            });
        }).catch(function (e) {
            console.log("error!?");
        });
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Haembi\Desktop\test\ionic3-vs-template\ion3\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home!!!</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Haembi\Desktop\test\ionic3-vs-template\ion3\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_database_service__["a" /* Database */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Database; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Database = /** @class */ (function () {
    function Database(sqlite) {
        this.sqlite = sqlite;
        this.errorDuringTableInitialization = false;
        this.options = {
            name: 'data.db',
            location: 'default',
            createFromLocation: 1
        };
        //this.connectToDatabaseAndCreateTables();
    }
    Database.prototype.connectToDatabaseAndCreateTables = function () {
        var _this = this;
        return this.sqlite.create(this.options)
            .then(function (db) {
            _this.db = db;
        })
            .then(function () {
            return _this.initalizeDatabase();
        })
            .catch(function (e) {
            _this.internalLastSqlQueryLog += "Error: " + JSON.stringify(e);
        });
    };
    Database.prototype.createTablesIfNotExisting = function () {
        var _this = this;
        var sqlCreateProject = 'CREATE TABLE IF NOT EXISTS project (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255) NOT NULL, creationTimestamp VARCHAR(255) NOT NULL, lastEditTimestamp VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, lead VARCHAR(255) NOT NULL, recoveryKey VARCHAR(255) NOT NULL, projectCode VARCHAR(255));';
        var sqlStaticProjectionGoal = 'CREATE TABLE IF NOT EXISTS static_protectiongoal (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255) NOT NULL);';
        var sqlStaticProjectionGoalQuestions = 'CREATE TABLE IF NOT EXISTS static_protectiongoal_question (id INTEGER PRIMARY KEY AUTOINCREMENT, protectionGoalId INTEGER NOT NULL, question VARCHAR(255) NOT NULL, FOREIGN KEY(protectionGoalId) REFERENCES static_protectiongoal(id));';
        var sqlProjectQuestionAnswer = 'CREATE TABLE IF NOT EXISTS project_question_answer (projectId INTEGER NOT NULL, questionId INTEGER NOT NULL, answer INTEGER NOT NULL, UNIQUE(projectId, questionId), FOREIGN KEY(projectId) REFERENCES project(id), FOREIGN KEY(questionId) REFERENCES static_protectiongoal_question(id));';
        return this.db.executeSql(sqlCreateProject, {})
            .then(function () {
            return _this.db.executeSql(sqlStaticProjectionGoal, {});
        })
            .then(function () {
            return _this.db.executeSql(sqlStaticProjectionGoalQuestions, {});
        }).then(function () {
            return _this.db.executeSql(sqlProjectQuestionAnswer, {});
        }).catch(function (e) {
            console.log("fehler");
        });
    };
    Database.prototype.checkGoalAndInsertItWhenNotExisting = function (goal) {
        var _this = this;
        var selectGoalSql = "SELECT name FROM static_protectiongoal where name = '" + goal + "'";
        var insertGoalSql = "INSERT INTO static_protectiongoal (name) VALUES ('" + goal + "')";
        return this.db.executeSql(selectGoalSql, {})
            .then(function (result) {
            if (result.rows.length == 0)
                return _this.db.executeSql(insertGoalSql, {});
        }).catch(function (e) {
            _this.errorDuringTableInitialization = true;
            _this.internalLastSqlQueryLog += "Error: " + JSON.stringify(e);
        });
    };
    Database.prototype.checkQuestionsForGoalAndAddIfNotExisting = function (goal, questionsArray) {
        var _this = this;
        var selectGoalSql = "SELECT id, name FROM static_protectiongoal where name = '" + goal + "'";
        var selectQuestionSql = "SELECT question FROM static_protectiongoal_question where question = '" + questionsArray + "'";
        var protectionGoalId = -1;
        return this.db.executeSql(selectGoalSql, {})
            .then(function (result) {
            if (result.rows.length == 1) {
                protectionGoalId = result.rows.item(0).id;
            }
            return _this.db.executeSql(selectQuestionSql, {});
        }).then(function (result) {
            if (result.rows.length == 0) {
                // question wasn't found, create it!
                var insertQuestionSql = "INSERT INTO static_protectiongoal_question (protectionGoalId, question) VALUES ('" + protectionGoalId + "', '" + questionsArray + "')";
                return _this.db.executeSql(insertQuestionSql, {});
            }
            else {
                // question found, don't add it!
            }
        }).catch(function (e) {
            _this.errorDuringTableInitialization = true;
            _this.internalLastSqlQueryLog += "Error: " + JSON.stringify(e);
        });
    };
    Database.prototype.initalizeDatabase = function () {
        var _this = this;
        this.createTablesIfNotExisting()
            .then(function () {
            return _this.checkGoalAndInsertItWhenNotExisting("Identifizierung & Authentifizierung");
        })
            .then(function () {
            return _this.checkQuestionsForGoalAndAddIfNotExisting("Identifizierung & Authentifizierung", "Ich bin eine Identifizierungs und Authentifizierungsfrage!");
        })
            .then(function () {
            return _this.checkGoalAndInsertItWhenNotExisting("Nutzungskontrolle");
        })
            .then(function () {
            return _this.checkQuestionsForGoalAndAddIfNotExisting("Nutzungskontrolle", "Ich bin eine Nutzungskontrollefrage!");
        })
            .then(function () {
            return _this.checkQuestionsForGoalAndAddIfNotExisting("Nutzungskontrolle", "Ich bin eine zweite Nutzungskontrollefrage!");
        })
            .then(function () {
            return _this.checkGoalAndInsertItWhenNotExisting("Systemintegrität");
        })
            .then(function () {
            return _this.checkQuestionsForGoalAndAddIfNotExisting("Systemintegrität", "Ich bin eine Systemintegritätsfrage!");
        })
            .then(function () {
            return _this.checkQuestionsForGoalAndAddIfNotExisting("Systemintegrität", "Ich bin die zweite Systemintegritätsfrage!");
        })
            .then(function () {
            return _this.checkQuestionsForGoalAndAddIfNotExisting("Systemintegrität", "Ich bin die dritte Systemintegritätsfrage!");
        })
            .catch(function (e) {
            _this.errorDuringTableInitialization = true;
            _this.internalLastSqlQueryLog += "Error: " + JSON.stringify(e);
        });
    };
    // for testing
    Database.prototype.dropAllDatabases = function () {
        var _this = this;
        var sqlCreateProject = 'DROP TABLE IF EXISTS project;';
        var sqlStaticProjectionGoal = 'DROP TABLE IF EXISTS static_protectiongoal;';
        var sqlStaticProjectionGoalQuestions = 'DROP TABLE IF EXISTS static_protectiongoal_questions;';
        this.db.executeSql(sqlCreateProject, {})
            .then(function () { return _this.db.executeSql(sqlStaticProjectionGoal, {}); })
            .then(function () { return _this.db.executeSql(sqlStaticProjectionGoalQuestions, {}); })
            .catch(function (e) {
            _this.errorDuringTableInitialization = true;
            _this.internalLastSqlQueryLog += "Error: " + JSON.stringify(e);
        });
    };
    Database.prototype.createProject = function (name, password, lead, projectCode) {
        var recoveryKey = Math.floor(Math.random() * 10);
        var creationTimestamp = Math.floor(+new Date() * 1000);
        var sql = "INSERT INTO project (name, creationTimestamp, lastEditTimestamp, password, lead, recoveryKey, projectCode) VALUES ('" + name + "', '" + creationTimestamp + "', '" + creationTimestamp + "', '" + password + "', '" + lead + "', '" + recoveryKey + "', '" + projectCode + "')";
        return this.db.executeSql(sql, {});
    };
    Database.prototype.generateRecoveryKeyForProjectId = function (projectId) {
        var recoveryKey = Math.floor(Math.random() * 10);
        var sql = "UPDATE project SET recoveryKey = " + recoveryKey + " WHERE project.id = " + projectId;
        return this.db.executeSql(sql, {});
    };
    Database.prototype.getRecoveryKeyForProjectId = function (projectId) {
        var sql = "SELECT recoveryKey FROM project WHERE project.id = " + projectId;
        return this.db.executeSql(sql, {});
    };
    Database.prototype.updatePasswordForProject = function (projectId, password) {
        var sql = "UPDATE project SET password = '" + password + "' WHERE project.id = " + projectId;
        return this.db.executeSql(sql, {});
    };
    Database.prototype.getPasswordForProject = function (projectId) {
        var sql = "SELECT password FROM project WHERE project.id = " + projectId;
        return this.db.executeSql(sql, {});
    };
    Database.prototype.getAllProjects = function () {
        var _this = this;
        var sql = "SELECT id, name, creationTimestamp, lastEditTimestamp, lead, projectCode FROM project";
        if (typeof this.db === "undefined") {
            return this.connectToDatabaseAndCreateTables().then(function () {
                return _this.db.executeSql(sql, {});
            });
        }
        else {
            return this.db.executeSql(sql, {});
        }
    };
    Database.prototype.clearAllProjects = function () {
        var _this = this;
        var sql = "DELETE FROM project;";
        var sql2 = "DELETE FROM project_question_answer;";
        this.db.executeSql(sql, {})
            .then(function () { return _this.db.executeSql(sql2, {}); })
            .then(function () { return _this.internalLastSqlQueryLog += "\n" + 'Executed SQL' + sql; })
            .catch(function (e) { return _this.internalLastSqlQueryLog += "Error: " + JSON.stringify(e); });
    };
    Database.prototype.getAllSecurityGoals = function () {
        var sql = "SELECT id, name FROM static_protectiongoal";
        return this.db.executeSql(sql, {});
    };
    Database.prototype.getAllQuestionsForSecurityGoalId = function (securityGoalId) {
        var sql = "SELECT id, question FROM static_protectiongoal_question WHERE protectionGoalId = " + securityGoalId;
        return this.db.executeSql(sql, {});
    };
    Database.prototype.getAllQuestionsForSecurityGoalIdWithAnswers = function (securityGoalId, projectId) {
        var sql = "SELECT static_protectiongoal_question.id, static_protectiongoal_question.question, project_question_answer.answer " +
            "FROM static_protectiongoal_question " +
            "LEFT JOIN project_question_answer ON static_protectiongoal_question.id = project_question_answer.questionId AND project_question_answer.projectId = " + projectId + " " +
            "WHERE static_protectiongoal_question.protectionGoalId = " + securityGoalId; // + " AND project_question_answer.projectId = " + projectId;
        return this.db.executeSql(sql, {});
    };
    Database.prototype.getGoalMetadata = function (securityGoalId, projectId) {
        var _this = this;
        var questionIds = [];
        return this.getAllQuestionsForSecurityGoalId(securityGoalId).then(function (result) {
            var num = result.rows.length;
            while (num >= 1) {
                var question = result.rows.item(num - 1);
                questionIds.push(question.id);
                num--;
            }
        }).then(function () {
            var questionsQuery = "(";
            var num = questionIds.length;
            while (num >= 1) {
                var question = questionIds[num - 1];
                questionsQuery += (question + ",");
                num--;
            }
            questionsQuery = questionsQuery.slice(0, -1);
            questionsQuery += ");";
            var sql = "SELECT answer FROM project_question_answer WHERE projectId = " + projectId + " AND questionId IN " + questionsQuery;
            return _this.db.executeSql(sql, {});
        }).catch(function (e) {
            // handle error?!
            console.log("we have error");
        });
    };
    Database.prototype.setAnswerForQuestion = function (questionId, projectId, answer) {
        var _this = this;
        var deleteSql = "DELETE FROM project_question_answer WHERE projectId = " + projectId + " AND questionId = " + questionId;
        var sql = "INSERT INTO project_question_answer (projectId, questionId, answer) VALUES ('" + projectId + "', '" + questionId + "', '" + answer + "')"; // ON DUPLICATE KEY UPDATE answer = " + answer;
        var sqlUpdateLastEditedTimestamp = "UPDATE project SET lastEditTimestamp = '" + Math.floor(+new Date() * 1000) + "' WHERE project.id = " + projectId;
        return this.db.executeSql(deleteSql, {})
            .then(function () {
            return _this.db.executeSql(sql, {});
        }).then(function () {
            return _this.db.executeSql(sqlUpdateLastEditedTimestamp, {});
        });
    };
    Database.prototype.deleteProjectWithProjectId = function (projectId) {
        var sql = "DELETE FROM project where project.id = " + projectId;
        return this.db.executeSql(sql, {});
    };
    Database = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], Database);
    return Database;
}());

//# sourceMappingURL=database.service.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Haembi\Desktop\test\ionic3-vs-template\ion3\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Haembi\Desktop\test\ionic3-vs-template\ion3\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_sqlite__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_database_service__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__services_database_service__["a" /* Database */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_sqlite__["a" /* SQLite */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Haembi\Desktop\test\ionic3-vs-template\ion3\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Haembi\Desktop\test\ionic3-vs-template\ion3\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map