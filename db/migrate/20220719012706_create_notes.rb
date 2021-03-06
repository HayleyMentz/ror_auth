class CreateNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :notes do |t|
      t.string :subject
      t.text :body
      t.datetime :notedate
      t.datetime :notetime
      t.belongs_to :cat, null: false, foreign_key: true

      t.timestamps
    end
  end
end
