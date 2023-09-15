## users テーブル

| Column             | Type       | Options                   |
| ------------------ | ---------- | ------------------------- |
| name               | string     | null: false               |
| email              | string     | null: false unique: true  |
| encrypted_password | string     | null: false               |
| lore_id            | integer    |                           |
| shift_id           | references | null: false               |

- has_many :shifts
- has_many :

## shifts テーブル

| Column            | Type       | Options                        |
| --------------    | ---------- | ------------------------------ |
| shift_id          | integer    | null: false                    |
| user_id           | references | null: false                    |


- has_many :users
- has_one :

##  テーブル

| Column           | Type       | Options                        |
| ---------------- | ---------- | ------------------------------ |
| place            | string     | null: false                    |
| role_id          | integer    | null: false                    |

-belongs_to :
