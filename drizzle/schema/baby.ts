import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { upload } from '~drizzle/schema/upload';

export const baby = sqliteTable('baby', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	name: text('name').notNull(),
	bornAt: text('born_at').notNull(),
	// 0 is girl, 1 is boy
	gender: integer('gender').default(0).notNull(),
	avatar: integer('avatar').notNull().references(() => upload.id),
	createdAt: integer('created_at', { mode: 'timestamp_ms' })
		.notNull()
		.$defaultFn(() => new Date()),
	updatedAt: integer('updated_at', { mode: 'timestamp_ms' })
		.notNull()
		.$defaultFn(() => new Date())
});
