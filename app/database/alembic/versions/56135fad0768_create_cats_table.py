"""create cats table

Revision ID: 56135fad0768
Revises: 2806830d3bd7
Create Date: 2024-09-30 18:33:56.557596

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '56135fad0768'
down_revision: Union[str, None] = '2806830d3bd7'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade():
    op.create_table(
        'cats',
        sa.Column('id', sa.String(), primary_key=True),
        sa.Column('url', sa.String(), nullable=False),
        sa.Column('favorite', sa.Boolean(), nullable=False),
        sa.Column('breed_id', sa.String()),
    )

    op.create_foreign_key(
        "fk_cat_breed",
        "cats",
        "breeds",
        ["breed_id"],
        ["id"],
    )


def downgrade() -> None:
    pass
