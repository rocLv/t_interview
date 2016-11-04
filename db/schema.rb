# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161104073728) do

  create_table "accesses", force: :cascade do |t|
    t.integer  "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_accesses_on_project_id"
  end

  create_table "comments", force: :cascade do |t|
    t.string   "content"
    t.integer  "title_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title_id"], name: "index_comments_on_title_id"
  end

  create_table "events", force: :cascade do |t|
    t.integer  "from_id"
    t.integer  "actions"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "todo_id"
    t.index ["from_id"], name: "index_events_on_from_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "team_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string   "name"
    t.integer  "users_id"
    t.integer  "projects_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["projects_id"], name: "index_teams_on_projects_id"
    t.index ["users_id"], name: "index_teams_on_users_id"
  end

  create_table "todos", force: :cascade do |t|
    t.string   "title"
    t.string   "content"
    t.datetime "due_date"
    t.integer  "executor_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "project_id"
  end

  create_table "users", force: :cascade do |t|
    t.string   "email"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.integer  "team_id"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
